const Button = ({ label, light }) => {
	return (
		<button
			className={`w-fit font-mono font-semibold uppercase bg-button text-black px-4 py-2 tracking-[0.3em]`}
		>
			{label}
		</button>
	);
};

export default Button;
