
import { revalidateTag } from 'next/cache'

export async function GET() {
  console.log('Revalidating via API request...')
  revalidateTag('data') 
  return new Response('Revalidated', { status: 200 })
}
