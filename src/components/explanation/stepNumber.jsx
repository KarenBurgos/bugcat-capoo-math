export default function StepNumber({ number, color }) {
  return (
    <div className="h-14 w-20 ml-5 relative flex justify-center items-center md:h-16 md:w-16 md:p-0 md:m-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 300 300"
      >
        <path
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="15"
          d="M81.72 62.56c.41.71 28.63-18.15 29.33-16.93 1.85 3.21-67.31 69.61-66.13 71.66 2.42 4.2 123.46-78.01 126.38-72.96 3.18 5.51-130.65 105.21-128.83 108.36 2.54 4.39 160.71-101.53 164.49-94.97 2.81 4.86-168.92 120.85-164.58 128.37 2.3 3.98 191.16-117.05 194.06-112.04 3.86 6.68-183.87 133.91-181.15 138.63 2.17 3.76 195.06-117.62 197.23-113.87 4.67 8.08-182.21 129.73-178.27 136.55s183.31-112.81 186.33-107.58c3.86 6.68-158.76 118.78-156.03 123.51 1.87 3.24 150.31-95.25 153.98-88.9 3.11 5.39-110.46 91.16-107.66 96.02 1.76 3.05 95.18-60.86 97.74-56.43"
        ></path>
      </svg>
      <h1 className="absolute z-10 md:text-2xl font-medium">{number}</h1>
    </div>
  );
}
