import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import customFetch from "./utils"
import { toast } from "react-toastify"

export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  })

  return { isLoading, data, error }
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  const { mutate: createTask, isLoading: createTaskIsLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      toast.success("Task Added")
    },
    onError: (error) => {
      toast.error(error.response.data.msg)
    },
  })
  return { createTask, createTaskIsLoading }
}

export const useEditTask = () => {
  const queryClient = useQueryClient()

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
  })
  return { editTask }
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
  })

  return { deleteTask, deleteTaskLoading }
}