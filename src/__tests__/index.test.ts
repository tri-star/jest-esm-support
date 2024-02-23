import { sampleHandler } from "@/index"
import { type VersionedApiGatewayEvent } from "@middy/http-json-body-parser"
import { type APIGatewayProxyEvent, type Context } from "aws-lambda"

function parseHandlerJsonResponse<T>(response: any) {
  return {
    statusCode: response.statusCode,
    body: JSON.parse(response.body ?? '') as T,
  }
}

describe('index', () => {
  test('should pass', async () => {

    const response = await sampleHandler({
      headers: {
      },
    } as unknown as APIGatewayProxyEvent & VersionedApiGatewayEvent,
    undefined as unknown as Context,)

    const responseJson = JSON.parse((response as any)['body'])
    expect(responseJson['message']).toBe('mocked')
  })
})
