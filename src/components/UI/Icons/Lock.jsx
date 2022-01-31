import * as React from 'react';

function Lock(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' {...props}>
      <path d='M14 0c-5.514 0-10 4.486-10 10v3h-1.5c-1.378 0-2.5 1.122-2.5 2.5v14c0 1.378 1.122 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-14c0-1.378-1.122-2.5-2.5-2.5h-1.5v-3c0-5.514-4.486-10-10-10zM5 10c0-4.962 4.038-9 9-9s9 4.038 9 9v3h-3v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-3v-3zM19 13h-10v-3c0-2.757 2.243-5 5-5s5 2.243 5 5v3zM12.293 21l-5 5h-4.586l5-5h4.586zM18.293 21l-5 5h-4.586l5-5h4.586zM24.293 21l-5 5h-4.586l5-5h4.586zM27 21v5h-6.293l5-5h1.293zM1.293 26h-0.293v-5h5.293l-5 5zM25.5 31h-23c-0.827 0-1.5-0.673-1.5-1.5v-2.5h26v2.5c0 0.827-0.673 1.5-1.5 1.5zM27 15.5v4.5h-26v-4.5c0-0.827 0.673-1.5 1.5-1.5h23c0.827 0 1.5 0.673 1.5 1.5z'></path>
    </svg>
  );
}

export default Lock;