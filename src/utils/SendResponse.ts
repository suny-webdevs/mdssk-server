import { NextResponse } from "next/server"

type TResponse<T> = {
  success: boolean
  message: string
  data: T
}

const SendResponse = <T>(
  statusCode: number,
  success: boolean,
  message: string,
  data: T
) => {
  const responseBody: TResponse<T> = {
    success,
    message,
    data,
  }

  return NextResponse.json(responseBody, { status: statusCode })
}

export default SendResponse
