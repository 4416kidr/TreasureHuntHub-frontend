import { FormEvent } from 'react'

export default function Home() {
  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
 
  //   const formData = new FormData(event.currentTarget)
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData,
  //   })
 
  //   // Handle response if necessary
  //   const data = await response.json()
  //   // ...
  // }
    return (
      <main>
        <h1>form page</h1>
        {/* <form  onSubmit={onSubmit}> */}
        <div className='py-4 border-4 '>
          <form className='flex flex-col items-center'>
            <input type="text" name="store-id" placeholder='店舗情報を入力' required className='border-2 border-solid border-red-500 my-2'/>
            <input type="text" name="item-id" placeholder='商品情報を入力' required className='border-2 border-solid border-red-500 my-2'/>
            <input type="text" name="stock-id" placeholder='在庫情報' required className='border-2 border-solid border-red-500 my-2'/>
            <input type="text" name="comment" placeholder='コメントを入力' className='border-2 border-solid border-red-500 my-2'/>
            <input type="file" name="photo" placeholder='写真を選択' />
            <button type="submit" className='border-4 w-min'>Submit</button>
          </form>
        </div>
      </main>
    );
  }
