const UserWalletInfo = () => {
  return (
    <div className='flex h-28'>
      <div className='flex items-center justify-center bg-[#286DB4] dark:bg-slate-800 text-white text-3xl px-4 border-r w-36'>
        MY쿠팡
      </div>
      <CounterBox title='미사용티켓' count={0} label='장' />
      <CounterBox title='배송중' count={0} label='개' />
      <CounterBox title='할인쿠폰' count={2} label='장' />
      <div className='flex flex-col flex-1 bg-[#82BCE2] dark:bg-slate-600 text-white  justify-between'>
        <div className='flex-1 flex items-center px-6'>
          쿠페이 머니
          <label className='text-xl ml-auto'>293030</label>
          <label className='text-sm'>원</label>
        </div>
        <hr />
        <div className='flex-1 flex justify-between items-center px-6'>
          <div>쿠팡캐시</div>
          <label className='text-xl ml-auto'>29232</label>
          <label className='text-sm'>원</label>
        </div>
      </div>
    </div>
  )
}

export default UserWalletInfo

const CounterBox = ({
  title,
  count,
  label,
}: {
  title: string
  count: number
  label: string
}) => (
  <div className='items-center justify-center bg-[#82BCE2] dark:bg-slate-600 text-white w-36 border-r md:flex hidden'>
    <div className='flex flex-col gap-2'>
      <div className='text-bold'>{title}</div>
      <div>
        <label className='text-5xl'>{count}</label>
        <label className='text-sm ml-2'>{label}</label>
      </div>
    </div>
  </div>
)
