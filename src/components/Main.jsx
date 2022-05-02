import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <>
      <div id="head-content" className="head-container">
        <div data-aos="fade-left" className="brand-container">
          <span>Skills</span>
        </div>
      </div>

      <div className="container">
        <div className="main-head-container">
          <p>T-tools and technologies that i'm familier with:</p>
        </div>
        <div data-aos="fade-right" className="icon-container">
          <svg
            className="icon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>folder_type_git</title>
            <path
              d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z"
              fill="#bf5e55"
            />
            <path
              d="M30.6,19.565,21.435,10.4a1.352,1.352,0,0,0-1.913,0l-1.9,1.9,2.415,2.415a1.606,1.606,0,0,1,2.034,2.047L24.4,19.091a1.607,1.607,0,1,1-.964.907L21.26,17.827V23.54a1.606,1.606,0,1,1-1.323-.047V17.727a1.61,1.61,0,0,1-.873-2.11l-2.381-2.381L10.4,19.522a1.353,1.353,0,0,0,0,1.913L19.565,30.6a1.353,1.353,0,0,0,1.913,0L30.6,21.478a1.353,1.353,0,0,0,0-1.913"
              fill="#dd4c35"
            />
            <path
              d="M17.619,12.3l2.415,2.415a1.606,1.606,0,0,1,2.034,2.047L24.4,19.091a1.607,1.607,0,1,1-.964.907L21.26,17.827V23.54a1.606,1.606,0,1,1-1.323-.047V17.727a1.61,1.61,0,0,1-.873-2.11l-2.381-2.381"
              fill="#fff"
            />
          </svg>
          <span>Git</span>
        </div>
        <div data-aos="fade-left" className="icon-container">
          <svg
            className="icon"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 291.32 291.32"
            fill=" 0 0 291.32 291.32;"
          >
            <g>
              <path
                fill="white"
                d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66
		s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235
		c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3
		c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0
		c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572
		c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425
		c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263
		c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184
		C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66
		C264.008,196.668,231.69,239.992,186.462,256.625z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <span>Git Hub</span>
        </div>
        <div data-aos="fade-right" className="icon-container">
          <svg
            className="icon"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            background="0 0 512 512;"
          >
            <path
              fill="#ff6666"
              d="M46.917,10.199c-4.518,0-7.885,3.682-7.484,8.182l38.091,427.247c0.401,4.5,4.29,9.171,8.646,10.381
	l161.636,44.879c4.354,1.21,11.478,1.21,15.833,0.003l162.127-44.953c4.354-1.208,8.248-5.879,8.649-10.377l38.153-427.179
	c0.404-4.5-2.966-8.182-7.484-8.182L46.917,10.199L46.917,10.199z M183.083,292.6c4.518,0,8.542,3.682,8.946,8.182l2.413,27.042
	c0.401,4.5,4.296,9.144,8.66,10.322l44.723,12.078c4.36,1.178,7.945,2.143,7.965,2.143c0.019,0,3.603-0.966,7.965-2.144
	l44.803-12.107c4.36-1.178,8.259-5.825,8.663-10.322l4.858-54.178c0.404-4.5-2.962-8.182-7.48-8.182H142.478
	c-4.518,0-8.542-3.684-8.943-8.182l-13.305-149.064c-0.357-4.013,3.046-7.298,7.565-7.298h256.091c4.516,0,7.921,3.284,7.563,7.299
	l-4.313,47.103h-199.89c-4.518,0-7.885,3.682-7.484,8.182l3.521,39.357c0.401,4.499,4.427,8.182,8.946,8.182h182.716
	c4.024,0,7.02,3.284,6.656,7.298l-13.85,155.14c-0.225,2.525-3.969,5.58-8.323,6.787l-95.51,26.483
	c-4.354,1.206-7.972,2.205-8.039,2.219c-0.067,0.015-3.684-0.963-8.039-2.17l-95.612-26.531c-4.354-1.208-8.244-5.879-8.646-10.379
	l-6.154-69.078c-0.401-4.5,2.969-8.182,7.487-8.182L183.083,292.6L183.083,292.6z"
            />
            <g>
              <path
                fill="#C63F00;"
                d="M255.727,512c-3.784,0-7.567-0.428-10.65-1.285l-161.635-44.88
		c-8.393-2.331-15.304-10.629-16.076-19.305L29.274,19.286c-0.444-4.991,1.209-9.936,4.533-13.57C37.131,2.084,41.909,0,46.917,0
		h418.166c5.011,0,9.793,2.086,13.117,5.723c3.324,3.636,4.973,8.583,4.525,13.572l-38.153,427.173
		c-0.774,8.673-7.687,16.97-16.082,19.298l-162.127,44.953C263.28,511.573,259.502,512,255.727,512z M49.852,20.398l37.831,424.324
		c0.104,0.395,0.846,1.286,1.31,1.49l161.541,44.848c2.569,0.715,7.807,0.714,10.383,0.001l162.124-44.952
		c0.36-0.169,1.081-1.028,1.221-1.527l37.884-424.184H49.852z M256.031,419.198c-1.541,0-3.752-0.614-10.918-2.602L149.5,390.065
		c-8.391-2.326-15.304-10.623-16.077-19.3l-6.155-69.078c-0.445-4.988,1.208-9.933,4.531-13.568
		c3.325-3.634,8.104-5.719,13.114-5.719h38.168c9.835,0,18.226,7.674,19.103,17.471l2.408,26.972
		c0.135,0.467,0.802,1.261,1.238,1.475l44.651,12.057c2.036,0.55,3.901,1.053,5.303,1.43c1.403-0.377,3.27-0.881,5.308-1.432
		l44.73-12.088c0.439-0.215,1.109-1.013,1.244-1.482l4.589-51.175H142.479c-9.838,0-18.228-7.676-19.102-17.475l-13.305-149.063
		c-0.415-4.675,1.109-9.162,4.29-12.641c3.351-3.662,8.248-5.762,13.433-5.762h256.091c0.001,0,0.003,0,0.004,0
		c5.181,0,10.075,2.101,13.426,5.762c3.183,3.478,4.707,7.968,4.292,12.64l-4.316,47.13c-0.48,5.249-4.883,9.269-10.156,9.269
		H190.182l3.161,35.323h181.603c4.775,0,9.331,1.991,12.502,5.461c3.172,3.474,4.743,8.197,4.311,12.958l-13.851,155.126
		c-0.715,8.029-8.427,13.675-15.754,15.708l-95.512,26.484c-8.159,2.26-8.246,2.278-8.566,2.351
		C257.274,419.075,256.719,419.198,256.031,419.198z M155.022,370.429l95.545,26.511c2.186,0.606,3.959,1.091,5.243,1.439
		c1.424-0.393,3.321-0.917,5.384-1.489l95.509-26.483c0.418-0.115,0.799-0.273,1.119-0.432l13.28-148.765H192.229
		c-9.84,0-18.233-7.677-19.105-17.477l-3.52-39.353c-0.446-4.992,1.207-9.937,4.53-13.572c3.324-3.634,8.102-5.718,13.111-5.718
		h190.582l3.115-34.005H130.73l12.865,144.145H314.6c5.01,0,9.79,2.086,13.113,5.721s4.973,8.583,4.525,13.573l-4.859,54.176
		c-0.78,8.701-7.729,16.98-16.163,19.258l-44.801,12.106c-9.246,2.498-9.246,2.498-10.625,2.498c-1.382,0-1.382,0-10.623-2.495
		l-44.723-12.077c-8.437-2.279-15.384-10.56-16.159-19.265l-2.315-25.929h-34.121l5.887,66.084
		C153.871,369.371,154.567,370.207,155.022,370.429z"
              />
              <path
                fill="#C63F00;"
                d="M190.727,55.077H77.517c-5.632,0-10.199-4.567-10.199-10.199s4.567-10.199,10.199-10.199h113.21
		c5.632,0,10.199,4.567,10.199,10.199S196.36,55.077,190.727,55.077z"
              />
              <path
                fill="#C63F00;"
                d="M232.543,55.077h-4.08c-5.632,0-10.199-4.567-10.199-10.199s4.567-10.199,10.199-10.199h4.08
		c5.632,0,10.199,4.567,10.199,10.199S238.176,55.077,232.543,55.077z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <span>HTML5</span>
        </div>
        <div data-aos="fade-left" className="icon-container">
          <svg
            className="icon"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512.005 512.005"
            background="0 0 512.005 512.005;"
          >
            <g>
              <g>
                <path
                  fill="blue"
                  d="M472.661,341.741l-3.157-0.533C450.795,338.157,448,333.293,448,330.669c0-4.245,8.512-10.667,21.355-10.667
			c12.629,0,20.949,5.995,21.355,10.304c0.576,5.888,5.995,10.389,11.648,9.6c5.845-0.555,10.155-5.76,9.6-11.627
			c-1.621-16.896-19.925-29.632-42.603-29.632c-23.936,0-42.688,14.059-42.688,32c0,16.704,13.248,27.328,39.424,31.595
			l1.707-10.517l1.408,11.051c17.728,2.923,21.461,7.36,21.461,10.56c0,4.245-8.512,10.667-21.355,10.667
			c-12.629,0-20.949-6.016-21.355-10.325c-0.555-5.867-5.867-10.24-11.648-9.6c-5.845,0.555-10.155,5.76-9.6,11.627
			c1.621,16.896,19.925,29.632,42.603,29.632c23.936,0,42.688-14.059,42.688-32C512,356.653,498.773,346.029,472.661,341.741z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="blue"
                  d="M365.973,341.741l-3.157-0.533c-18.709-3.051-21.504-7.915-21.504-10.539c0-4.245,8.512-10.667,21.355-10.667
			c12.629,0,20.949,6.016,21.355,10.304c0.576,5.888,5.931,10.389,11.648,9.6c5.845-0.555,10.155-5.76,9.6-11.627
			c-1.621-16.896-19.925-29.632-42.603-29.632c-23.936,0-42.688,14.059-42.688,32c0,16.704,13.248,27.328,39.424,31.595
			l1.707-10.517l1.429,11.051c17.707,2.923,21.44,7.36,21.44,10.56c0,4.245-8.512,10.667-21.355,10.667
			c-12.629,0-20.949-6.016-21.355-10.325c-0.576-5.867-5.824-10.24-11.648-9.6c-5.845,0.555-10.155,5.76-9.6,11.627
			c1.621,16.896,19.925,29.632,42.603,29.632c23.936,0,42.688-14.059,42.688-32C405.312,356.653,392.085,346.029,365.973,341.741z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="blue"
                  d="M288,362.669c-5.888,0-10.667,4.779-10.667,10.667c0,5.888-4.8,10.667-10.667,10.667h-21.333
			c-5.867,0-10.667-4.779-10.667-10.667v-42.667c0-5.888,4.8-10.667,10.667-10.667h21.333c5.867,0,10.667,4.779,10.667,10.667
			s4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667c0-17.643-14.357-32-32-32h-21.333c-17.643,0-32,14.357-32,32v42.667
			c0,17.643,14.357,32,32,32h21.333c17.643,0,32-14.357,32-32C298.667,367.448,293.888,362.669,288,362.669z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="white"
                  d="M373.333,277.336c5.888,0,10.667-4.779,10.667-10.667v-256c0-5.888-4.779-10.667-10.667-10.667H138.667
			c-1.451,0-2.837,0.299-4.139,0.832c-0.405,0.171-0.704,0.491-1.067,0.725c-0.811,0.469-1.664,0.896-2.347,1.557l-128,128
			c-0.491,0.491-0.768,1.152-1.152,1.728c-0.384,0.576-0.875,1.067-1.131,1.707C0.299,135.853,0,137.24,0,138.669v362.667
			c0,5.888,4.779,10.667,10.667,10.667h362.667c5.888,0,10.667-4.779,10.667-10.667v-64c0-5.888-4.779-10.667-10.667-10.667
			c-5.888,0-10.667,4.779-10.667,10.667v53.333H21.333V149.336h117.333c5.888,0,10.667-4.779,10.667-10.667V21.336h213.333v245.333
			C362.667,272.557,367.445,277.336,373.333,277.336z M128,128.003H36.416L128,36.419V128.003z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <span>CSS</span>
        </div>
        <div id="icon2" data-aos="fade-right" className="icon-container">
          <svg
            className="icon"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            background=" 0 0 512 512;"
          >
            <g>
              <g>
                <path
                  fill="white"
                  d="M448.401,324.944h-17.102c-4.427,0-8.017,3.588-8.017,8.017c0,4.428,3.589,8.017,8.017,8.017h17.102
			c4.427,0,8.017-3.588,8.017-8.017C456.418,328.532,452.828,324.944,448.401,324.944z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="white"
                  d="M491.157,162.472h-45.579c-13.228-20.102-30.817-37.459-51.105-50.378c-20.034-12.757-42.828-21.224-66.323-24.716V8.017
			c0-4.428-3.589-8.017-8.017-8.017h-51.307H63.599c-4.427,0-8.017,3.588-8.017,8.017v188.125c0,4.428,3.589,8.017,8.017,8.017
			h76.982c-4.53,14.18-7.162,28.853-7.852,43.825H37.946c-4.427,0-8.017,3.588-8.017,8.017v205.762h-9.086
			c-4.427,0-8.017,3.588-8.017,8.017v34.205c0,4.428,3.589,8.017,8.017,8.017h17.102h290.739h17.102
			c4.427,0,8.017-3.588,8.017-8.017v-34.205c0-4.428-3.589-8.017-8.017-8.017h-9.086v-38.617
			c37.367-7.488,71.139-27.334,96.041-56.515h58.414c4.427,0,8.017-3.588,8.017-8.017v-51.307V170.489
			C499.173,166.06,495.584,162.472,491.157,162.472z M276.843,97.147V16.033h35.273v78.362c0,0.01,0,0.019,0,0.029v93.701h-35.273
			V97.147z M71.616,188.125V16.033H260.81v81.114v90.978H151.952H71.616z M45.962,264.017h94.597h180.109v152.432v45.314H45.962
			V264.017z M337.77,477.795v18.171h-9.086H37.946H28.86v-18.171h9.086h290.739H337.77z M336.701,406.758V256
			c0-4.428-3.589-8.017-8.017-8.017H148.786c0.765-15.029,3.692-29.717,8.723-43.825h111.318h51.307
			c4.427,0,8.017-3.588,8.017-8.017v-92.551c38.658,6.387,73.923,27.706,97.763,58.881h-37.371c-4.427,0-8.017,3.588-8.017,8.017
			v136.818v51.307c0,4.428,3.589,8.017,8.017,8.017h22.267C390.289,386.643,364.67,400.541,336.701,406.758z M483.14,350.597
			h-54.147H396.56v-35.273h86.58V350.597z M483.14,299.29h-86.58V178.505h44.624c0.005,0,0.011,0.001,0.017,0.001
			c0.005,0,0.011-0.001,0.015-0.001h41.924V299.29z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M294.48,76.96c-4.427,0-8.017,3.588-8.017,8.017v25.653c0,4.428,3.589,8.017,8.017,8.017s8.017-3.588,8.017-8.017V84.977
			C302.497,80.549,298.908,76.96,294.48,76.96z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <span>Responsive Websites</span>
        </div>

        <div id="icon" data-aos="fade-left" className="icon-container">
          <svg
            className="icon"
            width="256"
            height="256"
            viewBox="-150 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
            id="icon-js"
          >
            <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
            <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
          </svg>
          <span>Javascript</span>
        </div>

        <div data-aos="fade-right" className="icon-container">
          <svg
            className="icon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="green"
              d="M5.304 16.563c0-0.095-0.050-0.183-0.132-0.23l-2.192-1.261c-0.037-0.022-0.079-0.033-0.121-0.035-0.004 0-0.020 0-0.023 0-0.042 0.002-0.083 0.013-0.121 0.035l-2.191 1.261c-0.082 0.047-0.133 0.135-0.133 0.23l0.005 3.396c0 0.047 0.025 0.091 0.066 0.114 0.041 0.024 0.091 0.024 0.132 0l1.302-0.746c0.082-0.049 0.132-0.135 0.132-0.23v-1.587c0-0.094 0.050-0.182 0.132-0.229l0.555-0.319c0.041-0.024 0.086-0.035 0.133-0.035 0.045 0 0.091 0.012 0.132 0.035l0.554 0.319c0.082 0.047 0.132 0.135 0.132 0.229v1.587c0 0.095 0.051 0.181 0.133 0.23l1.302 0.746c0.041 0.024 0.092 0.024 0.132 0 0.040-0.023 0.066-0.067 0.066-0.114l0.004-3.396zM17.006 11.894c-0.041-0.023-0.091-0.022-0.131 0.002s-0.065 0.067-0.065 0.114v3.363c0 0.033-0.018 0.064-0.046 0.080s-0.064 0.017-0.093 0l-0.549-0.316c-0.082-0.047-0.183-0.047-0.265 0l-2.192 1.265c-0.082 0.047-0.133 0.135-0.133 0.229v2.531c0 0.095 0.050 0.182 0.132 0.229l2.192 1.266c0.082 0.047 0.183 0.047 0.265 0l2.193-1.266c0.082-0.048 0.132-0.135 0.132-0.229v-6.309c0-0.096-0.052-0.184-0.136-0.231l-1.305-0.728zM16.803 18.331c0 0.024-0.012 0.046-0.033 0.057l-0.753 0.434c-0.020 0.012-0.046 0.012-0.066 0l-0.753-0.434c-0.021-0.012-0.033-0.034-0.033-0.057v-0.869c0-0.024 0.013-0.046 0.033-0.057l0.753-0.435c0.020-0.012 0.046-0.012 0.066 0l0.753 0.435c0.020 0.012 0.033 0.034 0.033 0.057v0.869zM24.85 17.439c0.081-0.047 0.132-0.134 0.132-0.229v-0.613c0-0.095-0.050-0.181-0.132-0.229l-2.178-1.265c-0.082-0.048-0.183-0.048-0.265-0l-2.192 1.265c-0.082 0.047-0.132 0.135-0.132 0.229v2.53c0 0.095 0.051 0.183 0.134 0.23l2.178 1.241c0.080 0.046 0.179 0.046 0.26 0.001l1.317-0.732c0.041-0.023 0.067-0.067 0.068-0.115s-0.025-0.092-0.066-0.116l-2.206-1.266c-0.041-0.023-0.066-0.067-0.066-0.115v-0.793c0-0.047 0.025-0.091 0.066-0.115l0.687-0.395c0.041-0.023 0.091-0.023 0.132 0l0.687 0.395c0.041 0.024 0.066 0.067 0.066 0.115v0.624c0 0.047 0.025 0.091 0.066 0.115s0.092 0.023 0.133-0l1.312-0.763zM9.291 15.090c0.082-0.047 0.183-0.047 0.265 0l2.192 1.265c0.082 0.047 0.132 0.134 0.132 0.229v2.532c0 0.095-0.051 0.182-0.132 0.229l-2.192 1.266c-0.082 0.047-0.183 0.047-0.265 0l-2.192-1.266c-0.082-0.047-0.132-0.135-0.132-0.229v-2.532c0-0.095 0.050-0.182 0.132-0.229l2.192-1.265zM29.106 20.647c-0.075 0-0.151-0.020-0.217-0.058l-0.69-0.408c-0.103-0.058-0.052-0.078-0.019-0.090 0.137-0.048 0.165-0.059 0.312-0.142 0.015-0.009 0.036-0.005 0.052 0.004l0.53 0.315c0.019 0.011 0.046 0.011 0.064 0l2.067-1.193c0.019-0.011 0.031-0.033 0.031-0.056v-2.386c0-0.023-0.012-0.045-0.032-0.057l-2.066-1.192c-0.019-0.011-0.045-0.011-0.064 0l-2.066 1.192c-0.020 0.011-0.033 0.034-0.033 0.057v2.386c0 0.023 0.013 0.044 0.032 0.055l0.566 0.327c0.307 0.154 0.495-0.027 0.495-0.209v-2.355c0-0.033 0.027-0.059 0.060-0.059h0.262c0.033 0 0.060 0.026 0.060 0.059v2.355c0 0.41-0.223 0.645-0.612 0.645-0.119 0-0.214 0-0.476-0.129l-0.542-0.312c-0.134-0.077-0.217-0.222-0.217-0.377v-2.386c0-0.155 0.083-0.3 0.217-0.377l2.067-1.194c0.131-0.074 0.305-0.074 0.434 0l2.067 1.194c0.134 0.077 0.217 0.222 0.217 0.377v2.386c0 0.155-0.083 0.299-0.217 0.377l-2.067 1.193c-0.066 0.038-0.141 0.058-0.218 0.058zM29.745 19.004c-0.905 0-1.094-0.415-1.094-0.764 0-0.033 0.026-0.059 0.060-0.059h0.267c0.030 0 0.055 0.022 0.059 0.051 0.040 0.272 0.16 0.41 0.708 0.41 0.435 0 0.621-0.099 0.621-0.329 0-0.133-0.052-0.232-0.729-0.298-0.565-0.056-0.915-0.181-0.915-0.633 0-0.417 0.352-0.666 0.941-0.666 0.662 0 0.99 0.23 1.031 0.723 0.002 0.017-0.004 0.033-0.016 0.046s-0.027 0.019-0.044 0.019h-0.268c-0.028 0-0.052-0.020-0.058-0.047-0.064-0.286-0.221-0.378-0.645-0.378-0.475 0-0.531 0.166-0.531 0.29 0 0.151 0.065 0.194 0.707 0.279 0.635 0.084 0.937 0.203 0.937 0.649 0 0.45-0.375 0.708-1.030 0.708zM22.506 17.321c0.016-0.009 0.035-0.009 0.051 0l0.421 0.243c0.016 0.009 0.026 0.026 0.026 0.044v0.486c0 0.018-0.010 0.035-0.026 0.044l-0.421 0.243c-0.016 0.009-0.035 0.009-0.051 0l-0.42-0.243c-0.016-0.009-0.025-0.026-0.025-0.044v-0.486c0-0.018 0.010-0.035 0.025-0.044l0.42-0.243z"
            ></path>
          </svg>
          <span>Node JS</span>
        </div>
        <div data-aos="fade-left" className="icon-container">
          <svg
            className="icon"
            width="256px"
            height="256px"
            viewBox="0 -14 256 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z"
                fill="#00D8FF"
              ></path>
            </g>
          </svg>
          <span>React</span>
        </div>
        <div data-aos="fade-up" className="icon-container">
          <svg
            className="icon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>file_type_sass</title>
            <path
              d="M26.11,17.572a5.8,5.8,0,0,0-2.537.588,5.345,5.345,0,0,1-.568-1.314,3.53,3.53,0,0,1-.051-1.1,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256a6.171,6.171,0,0,0-.235.834,19.686,19.686,0,0,1-1.713,3.294,3.186,3.186,0,0,1-.44-2.066,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256-.118.5-.235.834-1.483,3.386-1.841,4.173c-.184.4-.343.726-.455.946h0a.233.233,0,0,1-.02.041c-.1.189-.153.292-.153.292v.005c-.077.138-.159.266-.2.266a1.711,1.711,0,0,1,.01-.869c.2-1.059.69-2.705.685-2.762,0-.031.092-.317-.317-.465a.508.508,0,0,0-.578.1c-.036,0-.061.087-.061.087s.445-1.851-.849-1.851a3.855,3.855,0,0,0-2.475,1.683c-.348.189-1.089.593-1.882,1.028-.3.169-.614.338-.905.5-.02-.02-.041-.046-.061-.066C6.87,17.6,3.975,16.416,4.1,14.171c.046-.818.327-2.966,5.559-5.575,4.306-2.122,7.733-1.534,8.326-.23.849,1.862-1.836,5.319-6.285,5.82a3.351,3.351,0,0,1-2.813-.711c-.235-.256-.271-.271-.358-.22-.143.077-.051.307,0,.44a2.626,2.626,0,0,0,1.606,1.263,8.55,8.55,0,0,0,5.217-.517c2.7-1.043,4.8-3.943,4.184-6.372-.619-2.465-4.71-3.278-8.582-1.9A19.5,19.5,0,0,0,4.359,9.952c-2.133,1.995-2.47,3.728-2.332,4.455.5,2.578,4.051,4.255,5.472,5.5-.072.041-.138.077-.194.107-.711.353-3.421,1.77-4.1,3.268-.767,1.7.123,2.915.711,3.079a4.374,4.374,0,0,0,4.71-1.908A4.725,4.725,0,0,0,9.049,20.1a.107.107,0,0,0-.02-.031l.557-.327c.363-.215.721-.414,1.028-.578a6.74,6.74,0,0,0-.363,1.862,3.886,3.886,0,0,0,.834,2.7.921.921,0,0,0,.675.22c.6,0,.875-.5,1.176-1.094.368-.726.7-1.57.7-1.57s-.414,2.281.711,2.281c.409,0,.823-.532,1.008-.8v.005s.01-.015.031-.051l.066-.107v-.01c.164-.286.532-.936,1.079-2.015.706-1.391,1.386-3.13,1.386-3.13a8.888,8.888,0,0,0,.271,1.13,10.643,10.643,0,0,0,.583,1.309c-.164.23-.266.358-.266.358l.005.005c-.133.174-.276.363-.435.547a16.3,16.3,0,0,0-1.314,1.647.447.447,0,0,0,.123.6,1.116,1.116,0,0,0,.685.113,3.147,3.147,0,0,0,1.028-.235,3.45,3.45,0,0,0,.885-.465,1.98,1.98,0,0,0,.849-1.744,3.521,3.521,0,0,0-.322-1.233c.051-.072.1-.143.148-.215a23.428,23.428,0,0,0,1.534-2.649,8.888,8.888,0,0,0,.271,1.13,7.57,7.57,0,0,0,.5,1.125A4.861,4.861,0,0,0,20.965,20.8c-.322.931-.072,1.35.4,1.447a1.425,1.425,0,0,0,.747-.153,3.4,3.4,0,0,0,.946-.486,2.126,2.126,0,0,0,1.043-1.729,3.268,3.268,0,0,0-.235-1.023,5.356,5.356,0,0,1,2.716-.312c2.434.286,2.915,1.805,2.823,2.445a1.618,1.618,0,0,1-.772,1.094c-.169.107-.225.143-.21.22.02.113.1.107.245.087A1.9,1.9,0,0,0,30,20.7c.077-1.5-1.355-3.145-3.887-3.13ZM7.33,23.9c-.808.88-1.933,1.212-2.419.931-.522-.3-.317-1.6.675-2.532a12.884,12.884,0,0,1,1.9-1.417c.118-.072.292-.174.5-.3l.056-.031h0l.123-.077A3.493,3.493,0,0,1,7.33,23.9Zm5.881-4c-.281.685-.869,2.44-1.227,2.342-.307-.082-.5-1.412-.061-2.726a6.193,6.193,0,0,1,.956-1.754c.44-.491.926-.655,1.043-.455a9.062,9.062,0,0,1-.711,2.593Zm4.853,2.322c-.118.061-.23.1-.281.072-.036-.02.051-.1.051-.1s.609-.655.849-.951c.138-.174.3-.378.476-.609V20.7c0,.782-.757,1.309-1.094,1.524Zm3.744-.854c-.087-.061-.072-.266.22-.905a3.408,3.408,0,0,1,.834-1.074,1.448,1.448,0,0,1,.082.471,1.547,1.547,0,0,1-1.135,1.509Z"
              fill="#cd6799"
            />
          </svg>
          <span>Sass</span>
        </div>
        <div data-aos="fade-up" className="icon-container">
          <svg
            className="icon"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>folder_type_vscode2</title>
            <path
              d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z"
              fill="#5594bf"
            />
            <path
              d="M17.187,22.516l-5.167,3.892L9.889,25.7l5.255-5.2L9.889,15.3l2.13-.711,5.167,3.892L25.77,10l5.14,2.183V28.816L25.77,31ZM19.865,20.5l5.9,4.447V16.053Z"
              fill="#007acc"
            />
          </svg>
          <span>VS Code</span>
        </div>
      </div>
    </>
  );
}

export default Main;
