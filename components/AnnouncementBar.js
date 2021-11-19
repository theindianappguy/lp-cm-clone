const AnnouncementBar = () => {
  return (
    <div
      className='w-screen flex justify-center items-center'
      style={{
        backgroundColor: "#dff8f6",
        borderBottom: "3px solid #39b4ab",
      }}
    >
      <p
        className='text-center text-sm font-light'
        style={{
          color: "#303538",

          lineHeight: "21px",
          padding: "11px 32px 9px 16px",
        }}
      >
        Dribbble and Creative Market are teaming up to empower designers.
        <a
          className='underline ml-1  font-medium'
          href='https://creativemarket.com/blog/creative-market-dribbble?utm_campaign=dribbble_sitebanner_nov15'
        >
          Learn how!
        </a>
      </p>
      <a
        href='#'
        title='Dismiss'
        style={{
          position: "absolute",
          right: "12px",
          height: "20px",
        }}
      >
        <div
          style={{
            width: "14px",
          }}
        >
          <svg style={{ fontSize: "20px" }} viewbox='0 0 40 40'>
            <path className='close-x' d='M 10,10 L 30,30 M 30,10 L 10,30' />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default AnnouncementBar;
