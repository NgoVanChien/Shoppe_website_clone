import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className=' overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src='https://down-vn.img.susercontent.com/file/sg-11134201-23020-cmourix4j9mv45'
            alt=''
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-xs line-clamp-2'>
            Sữa rửa mặt thải độc SOME BY MI vitamin tạo bọt sáng da Bye Bye Blemish Vita Tox Brightening Buble Cleanser
            120g
          </div>
        </div>
        <div className='mt-3 flex items-center'>
          <div className='max-w-[50%] truncate text-gray-500 line-through'>
            <span className='text-xs'>₫</span>
            <span className='text-sm'>5000</span>
          </div>
          <div className='ml-1 truncate text-orange'>
            <span className='text-xs'>₫</span>
            <span className='text-sm'>25000</span>
          </div>
        </div>
        <div className='mt-3 flex items-center justify-end'>
          <div className='flex items-center'>
            <div className='relative'>
              <div className='absolute left-0 top-0 h-full overflow-hidden' style={{ width: '50%' }}>
                <svg
                  enableBackground='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  role='img'
                  className='h-3 w-3 fill-yellow-300 text-yellow-300'
                >
                  <path
                    d='m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
              <svg
                enableBackground='new 0 0 15 15'
                viewBox='0 0 15 15'
                role='img'
                className='text-gray-300-300 h-3 w-3 fill-current text-gray-300'
              >
                <path
                  d='m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
