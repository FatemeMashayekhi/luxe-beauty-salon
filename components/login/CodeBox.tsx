interface CodeBoxProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
}

export default function CodeBox({ otp, setOtp, inputRefs }: CodeBoxProps) {
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp];
      pastedData.split("").forEach((digit, index) => {
        if (index < 6) {
          newOtp[index] = digit;
        }
      });
      setOtp(newOtp);

      const nextEmptyIndex = newOtp.findIndex((val) => val === "");
      const focusIndex =
        nextEmptyIndex === -1 ? 5 : Math.min(nextEmptyIndex, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };
  return (
    <div className="flex gap-2 [direction:ltr]">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={setInputRef(index)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-xl border-2 border-[#E8E8E8] rounded-lg 
                     focus:border-[#E85372]  
                     transition-all duration-200 bg-surface outline-0"
          autoFocus={index === 0}
          dir="ltr"
        />
      ))}
    </div>
  );
}
