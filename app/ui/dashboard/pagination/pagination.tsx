"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }:any) => {
  // const searchParams 
  // const { replace } =
  // const pathname = 

  // const page = 

  // const params =
  // const ITEM_PER_PAGE = 2;

  // const hasPrev = 
  // const hasNext = 

  // const handleChangePage = (type) => {
  //   
  // };

  return (
    <div className={styles.container}>
      {/* <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button> */}
    </div>
  );
};

export default Pagination;
