import {useRouter} from "next/router"
import Button from "./Button";

const Buttons = () => {
    const router = useRouter();

    return (
        <div className='flex items-center mt-6'>
            <div className='flex mr-auto'>
                <a className='mr-2'> 
                    <Button text="Website" />
                </a>
                <a className='mr-2'>
                    <Button text="IMDB" />
                </a>
                <button className='text-sm inline-flex items-center justify-center px-[8px] py-[3px] min-w-[66px] md:min-w-[86px] min-h-[38px] bg-transparent text-[#ff206e] border-solid border-[1px] border-[#ff206e] rounded'>Trailer</button>
            </div>
            <button
                onClick={() => router.push('/')} 
                className='inline-flex items-center justify-center px-[16px] py-[3px] md:min-w-[66px] md:min-w-[86px] min-h-[38px] bg-[#ff206e] rounded'
            >
                <span className='flex gap-2'>
                    <svg viewBox="0 0 448 512" fill="currentColor" width="1em"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
                Back
                </span>
            </button>
        </div>
  )
}

export default Buttons