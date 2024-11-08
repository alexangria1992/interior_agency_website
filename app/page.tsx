import Image from 'next/image';

export default function Home() {
  return (
    <main className='no-scrollbar w-screen'>
      <section
        id='section'
        className='h-screen py-6 sm:py-24 max-h-[1120px] sm:max-h-screen relative w-full justify-center flex items-center'
      >
        <div id='container' className=' w-full h-full sm:px-24 px-6'>
          <Image
            src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/54098c96146799.5ea7f6d5a9050.jpg'
            alt=''
            fill
            className='object-cover absolute w-full h-full'
          />
          <div
            className='relative flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 
          xl:gap-0 sm:justify-between w-full bottom-0 h-full border-2 border-red-500'
          >
            <button className='border-2 font-bebas text-white pt-1 hover:bg-white hover:text-black duration-300 text-lg rounded-full px-9 py-1'>
              Explore
            </button>
            <div className='flex flex-col'>
              <h1 className='font-bold text-4xl leading-none text-white font-bebas'>
                Furniture For Your Home
              </h1>
              <p className='text-white text-lg'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
                velit quis rerum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
