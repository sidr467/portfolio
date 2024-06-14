function Footer() {
  return (
    <div className="flex flex-col gap-8 items-center mb-1 container">
      <h2 className="text-center text-base lg:text-lg font-bold py-2 px-4 ring-1 ring-black dark:ring-white w-fit rounded-lg  ">
        Get in touch
      </h2>
      <p className="text-xs md:text-sm mx-auto">
        What&apos;s next? Feel free to reach out to me if you&apos;re looking
        for a developer, have a query, or simply want to connect.
      </p>
      <a
        href="mailto:rsiddharth467@gmail.com"
        className=" text-base md:text-xl flex items-center gap-4 cursor-pointer hover:underline"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 16"
          className=" fill-current w-4 md:w-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.7348 1.4101L15.4548 2.4101L10.0048 6.4601L4.55483 2.3701L3.27483 1.3701C2.97329 1.12064 2.60518 0.965136 2.21612 0.922846C1.82706 0.880556 1.43414 0.953339 1.08604 1.13218C0.737943 1.31102 0.449961 1.58806 0.257775 1.92897C0.0655881 2.26988 -0.0223571 2.65969 0.00483439 3.0501V14.6401C0.00483439 15.0008 0.14812 15.3467 0.403169 15.6018C0.658219 15.8568 1.00414 16.0001 1.36483 16.0001H4.55483V8.2801L10.0048 12.3701L15.4548 8.2801V16.0001H18.6448C19.0055 16.0001 19.3515 15.8568 19.6065 15.6018C19.8616 15.3467 20.0048 15.0008 20.0048 14.6401V3.0501C20.0236 2.66306 19.9295 2.2789 19.7341 1.94432C19.5386 1.60974 19.2502 1.33914 18.9038 1.16543C18.5574 0.99171 18.168 0.922355 17.783 0.965791C17.3979 1.00923 17.0338 1.16358 16.7348 1.4101Z" />
        </svg>
        <h2>rsiddharth467@gmai.com</h2>
      </a>
      <footer className=" text-[10px] flex gap-2 items-center">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_20_3357)">
            <path
              d="M8.50016 14.6666C12.1821 14.6666 15.1668 11.6818 15.1668 7.99992C15.1668 4.31802 12.1821 1.33325 8.50016 1.33325C4.81826 1.33325 1.8335 4.31802 1.8335 7.99992C1.8335 11.6818 4.81826 14.6666 8.50016 14.6666Z"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 6.23592C10.1417 5.82972 9.66823 5.54226 9.14254 5.41178C8.61685 5.2813 8.0639 5.314 7.55725 5.50552C7.0506 5.69704 6.61429 6.0383 6.30636 6.48389C5.99843 6.92948 5.8335 7.45828 5.8335 7.99992C5.8335 8.54156 5.99843 9.07035 6.30636 9.51595C6.61429 9.96154 7.0506 10.3028 7.55725 10.4943C8.0639 10.6858 8.61685 10.7185 9.14254 10.5881C9.66823 10.4576 10.1417 10.1701 10.5 9.76392"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_20_3357">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <p>
          Designed and coded by{" "}
          <a
            href="https://github.com/sidr467"
            className="cursor-pointer hover:underline"
          >
            Siddharth Rathod
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Footer
