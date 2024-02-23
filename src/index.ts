import { sampleFunc } from '@/libs/sample-func'
import middy from '@middy/core'
import middyJsonBodyParser from '@middy/http-json-body-parser'

const middyfy = (handler: Parameters<typeof middy>[0]) => {
  return middy(handler)
    .use(
      middyJsonBodyParser({
        disableContentTypeError: true,
      }),
    )
}

export const sampleHandler = middyfy(
  async () => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: sampleFunc(),
        },
      ),
    }
  },
)
