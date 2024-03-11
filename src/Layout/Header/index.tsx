const Header = () => {
  return (
    <header className="bg-white py-[16px] px-[40px] border-b-2 border-b-grey flex justify-end">
      <div className="flex gap-x-[10px]">
        <img src="/svg/help-circle.svg" alt="helpCircle" />
        <img src="/svg/bell.svg" alt="bell" />
        <div className="flex items-center gap-x-[8px] text-[16px] px-[12px] py-[8px] border-[1px] border-[#E0E0E0]">
          <img
            src="/svg/maskGroup.svg"
            alt="maskGroup"
            width="32px"
            height="32px"
          />

          <img src="/svg/arrow.svg" alt="arrow" />
        </div>
      </div>
    </header>
  );
};

export default Header;
