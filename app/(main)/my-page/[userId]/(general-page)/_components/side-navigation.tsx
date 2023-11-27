const SideNavigation = () => {
  return (
    <div className='flex-col w-36 bg-zinc-100 dark:bg-zinc-800 border md:flex hidden'>
      <div className='flex flex-col '>
        <div className='font-bold text-sm mt-5 px-4'>MY 쇼핑</div>
        <div className='flex flex-col text-xs my-4 gap-1 px-4'>
          <div>주문목록 배송조회</div>
          <div>취소/반품/교환/환불내역</div>
          <div>와우 멤버십</div>
          <div>로켓프레시 프레시백</div>
          <div>정기배송관리</div>
          <div>영수증 조회/출력</div>
        </div>
        <hr />
        <div className='font-bold text-sm mt-5 px-4'>MY 혜택</div>
        <div className='flex flex-col text-xs my-4 gap-1 px-4'>
          <div>할인쿠폰</div>
          <div>쿠팡캐시/기프트카드</div>
        </div>
        <hr />
        <div className='font-bold text-sm mt-5 px-4'>MY 활동</div>
        <div className='flex flex-col text-xs my-4 gap-1 px-4'>
          <div>문의하기</div>
          <div>문의내역 확인</div>
          <div>리뷰관리</div>
          <div>찜 리스트</div>
        </div>
        <hr />
        <div className='font-bold text-sm mt-5 px-4'>MY 정보</div>
        <div className='flex flex-col text-xs my-4 gap-1 px-4'>
          <div>개인정보확인/수정</div>
          <div>결제수단·쿠페이 관리</div>
          <div>배송지 관리</div>
        </div>
      </div>
    </div>
  )
}

export default SideNavigation
