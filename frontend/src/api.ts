import { API_URL } from './config/api'

interface ApiResponse {
  success: boolean
  message?: string
  error?: string
}

type RequestParams = Record<string, string | number | boolean>

const apiRequest = async (
  method: string,
  url: string,
  data?: FormData | Record<string, any>,
  params?: RequestParams
): Promise<Response> => {
  const baseUrl = API_URL || window.location.origin
  const fullUrl = new URL(url, baseUrl)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      fullUrl.searchParams.append(key, String(value))
    })
  }

  const headers: HeadersInit = {}
  
  if (!(data instanceof FormData) && data && method !== 'GET') {
    headers['Content-Type'] = 'application/json'
  }

  const response = await fetch(fullUrl.toString(), {
    method,
    headers,
    body: data instanceof FormData 
      ? data 
      : data && method !== 'GET' 
        ? JSON.stringify(data) 
        : undefined,
    credentials: 'include',
  })

  return response
}

export const api = {
  submitEmailForm: async (
    formType: string,
    formData: Record<string, string | File>,
    files?: Record<string, File>
  ): Promise<ApiResponse> => {
    const formDataToSend = new FormData()
    formDataToSend.append('formType', formType)

    for (const [key, value] of Object.entries(formData)) {
      if (value !== null && value !== undefined && value !== '') {
        formDataToSend.append(key, value)
      }
    }

    if (files) {
      for (const [key, file] of Object.entries(files)) {
        if (file) {
          formDataToSend.append(key, file)
        }
      }
    }

    const response = await apiRequest('POST', '/email/', formDataToSend)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to submit form' }))
      throw new Error(errorData.error || `Server error: ${response.status}`)
    }

    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to submit form')
    }

    return result
  },
}

