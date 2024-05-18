import React from 'react';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
      <>
        <Topbar />

        <div
          style={{ width: "30%" }}
          className="drawer w-30% lg:drawer-open top-0 z-999 h-full mt-0"
        >
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          {/* <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Sidebar
          </label>
        </div> */}
          <div className="drawer-side z-999">
            <img className="w-full" src="/images/sales-logo.jpeg" alt="" />

            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <div className="flex items-center">
                <li>
                  <Link to="/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M15 17C14.2005 17.6224 13.1503 18 12 18C10.8498 18 9.79953 17.6224 9 17"
                        stroke="#181818"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.617 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3096 7.73112 21.7439 8.74938C22.1782 9.76763 22.0017 10.9162 21.6486 13.2135L21.3476 15.1724C20.8472 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44634 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z"
                        stroke="#181818"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Dashboard
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/manage-users">
                 
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 14.0116C9.45338 13.9164 7.38334 14.4064 5.57757 15.4816C4.1628 16.324 0.453366 18.0441 2.71266 20.1966C3.81631 21.248 5.04549 22 6.59087 22H12"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z"
                        stroke="#111111"
                        stroke-width="1.5"
                      />
                      <path
                        d="M18 20.7143V22M18 20.7143C16.8432 20.7143 15.8241 20.1461 15.2263 19.2833M18 20.7143C19.1568 20.7143 20.1759 20.1461 20.7737 19.2833M15.2263 19.2833L14.0004 20.0714M15.2263 19.2833C14.8728 18.773 14.6667 18.1597 14.6667 17.5C14.6667 16.8403 14.8727 16.2271 15.2262 15.7169M20.7737 19.2833L21.9996 20.0714M20.7737 19.2833C21.1272 18.773 21.3333 18.1597 21.3333 17.5C21.3333 16.8403 21.1273 16.2271 20.7738 15.7169M18 14.2857C19.1569 14.2857 20.1761 14.854 20.7738 15.7169M18 14.2857C16.8431 14.2857 15.8239 14.854 15.2262 15.7169M18 14.2857V13M20.7738 15.7169L22 14.9286M15.2262 15.7169L14 14.9286"
                        stroke="#111111"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    User Management
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/manage-clients">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Clients
                 </Link>
                </li>
              </div>
              <div>
                <li>
                 <Link to="/products">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C12.3141 22 12.6062 21.8587 13.1901 21.576L17.8842 19.3041C19.9614 18.2987 21 17.796 21 17V7M12 22C11.6859 22 11.3938 21.8587 10.8099 21.576L6.11575 19.3041C4.03859 18.2987 3 17.796 3 17V7M12 22V12"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.8099 2.42399C11.3938 2.14133 11.6859 2 12 2C12.3141 2 12.6062 2.14133 13.1901 2.42399L17.8842 4.69594C19.9614 5.70129 21 6.20397 21 7C21 7.79603 19.9614 8.29871 17.8842 9.30406L13.1901 11.576C12.6062 11.8587 12.3141 12 12 12C11.6859 12 11.3938 11.8587 10.8099 11.576L6.11575 9.30406C4.03859 8.29871 3 7.79603 3 7C3 6.20397 4.03859 5.70129 6.11575 4.69594L10.8099 2.42399Z"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Products
                    </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to ="/tasks" >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 2V4M12 2V4M7 2V4"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.5 13V9C3.5 6.17157 3.5 4.75736 4.37868 3.87868C5.25736 3 6.67157 3 9.5 3H14.5C17.3284 3 18.7426 3 19.6213 3.87868C20.5 4.75736 20.5 6.17157 20.5 9V13C20.5 15.8284 20.5 17.2426 19.6213 18.1213C18.7426 19 17.3284 19 14.5 19H9.5C6.67157 19 5.25736 19 4.37868 18.1213C3.5 17.2426 3.5 15.8284 3.5 13Z"
                        stroke="#181818"
                        stroke-width="1.5"
                      />
                      <path
                        d="M3.5 16V9C3.5 6.17157 3.5 4.75736 4.37868 3.87868C5.25736 3 6.67157 3 9.5 3H14.5C17.3284 3 18.7426 3 19.6213 3.87868C20.5 4.75736 20.5 6.17157 20.5 9V16C20.5 18.8284 20.5 20.2426 19.6213 21.1213C18.7426 22 17.3284 22 14.5 22H9.5C6.67157 22 5.25736 22 4.37868 21.1213C3.5 20.2426 3.5 18.8284 3.5 16Z"
                        stroke="#181818"
                        stroke-width="1.5"
                      />
                      <path
                        d="M8 15H12M8 10H16"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    Tasks Management
                 </Link>
                </li>
              </div>
              <div>
                <li>
                 <Link to="/visits">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3C9.05058 3 6.59627 5.11144 6.07743 7.8996C5.9907 8.36569 5.94733 8.59873 6.1089 8.90532C6.27048 9.2119 6.49914 9.31381 6.95646 9.51763C8.33509 10.1321 10.0897 10.5 12 10.5C13.9103 10.5 15.6649 10.1321 17.0435 9.51763C17.5009 9.31381 17.7295 9.2119 17.8911 8.90532C18.0527 8.59873 18.0093 8.36569 17.9226 7.8996C17.4037 5.11144 14.9494 3 12 3Z"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 5.5C19.989 6.28752 22 7.75946 22 9.44533C22 11.9608 17.5228 14 12 14C6.47715 14 2 11.9608 2 9.44533C2 7.75946 4.01099 6.28752 7 5.5"
                        stroke="#181818"
                        stroke-width="1.5"
                      />
                      <path
                        d="M12 18V21"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 17L18 21"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 17L6 21"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Visits Planning
                    </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/performance">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 17.5V14.5M11.5 17.5V8.5M16.5 17.5V13.5"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M21.5 5.5C21.5 7.15685 20.1569 8.5 18.5 8.5C16.8431 8.5 15.5 7.15685 15.5 5.5C15.5 3.84315 16.8431 2.5 18.5 2.5C20.1569 2.5 21.5 3.84315 21.5 5.5Z"
                        stroke="#181818"
                        stroke-width="1.5"
                      />
                      <path
                        d="M21.4955 11C21.4955 11 21.5 11.3395 21.5 12C21.5 16.4784 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4784 2.5 12C2.5 7.52169 2.5 5.28252 3.89124 3.89127C5.28249 2.50003 7.52166 2.50003 12 2.50003L13 2.5"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Perfomance
                    </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/feedback">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                        stroke="#181818"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Feedback
                    </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/orders">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.0098 7.45263C17.0098 4.44109 14.5474 1.99976 11.5098 1.99976C8.4722 1.99976 6.00977 4.44109 6.00977 7.45263"
                        stroke="#181818"
                        stroke-width="1.5"
                      />
                      <path
                        d="M21.3999 7.59569L2.60013 7.59546C2.53806 7.59546 2.49095 7.65078 2.50148 7.71131L4.98696 22.0003H18.9815L21.4985 7.71175C21.5092 7.65116 21.462 7.59569 21.3999 7.59569Z"
                        stroke="#181818"
                        stroke-width="1.5"
                      />
                    </svg>
                    Orders
                    </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Sidebar;