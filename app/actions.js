'use server'

import { revalidateTag } from 'next/cache'

export async function revalidateData() {
  console.log('Revalidating cache...') 
  revalidateTag('data') 
}
