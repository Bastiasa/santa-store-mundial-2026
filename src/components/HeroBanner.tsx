import { Button, Image, Stack, Title } from "@mantine/core";

import jamesImage from '../assets/catalog/james.jpeg';
import { useEffect, useRef } from "react";
import { useAppContext } from "./AppContext";

function MoreInfoButton() {
    const { data: { heroBannerContainer } } = useAppContext();
    

    const onButtonClicked = () => {
        window.scrollTo({ top: (heroBannerContainer?.offsetHeight ?? 0), behavior: 'smooth' });
    }

    return (
        <Button
            onClick={onButtonClicked}
            className="mx-auto text- block!">
            Más información
        </Button>
    );
}

function Label1() {


    return (

        <Stack>

            <p className=" text-white">
                    Vístete <br/>
                    del <span className="col-yellow">mun</span><span className="col-blue">di</span><span className="col-red">al</span>
            </p>

            <MoreInfoButton />
        </Stack>

    );
}

export function HeroBanner() {
  const herobannerContainerRef = useRef<HTMLDivElement>(null);

    const { setData } = useAppContext();

    useEffect(() => {
        setData({
            heroBannerContainer: herobannerContainerRef.current!
        })
    }, []);


    return (
        <div  ref={herobannerContainerRef} className="sm:h-dvh relative p-12 w-full bg-black">

            <div className="sm:left-10 sm:translate-x-0 sm:text-6xl sm:absolute text-5xl">
                <Label1/>
            </div>

            <img
                className="sm:left-[unset] sm:right-0 sm:translate-x-0 sm:top-0 sm:mt-0 sm:h-full sm:rounded-none sm:w-auto sm:absolute w-2/3 mx-auto mt-10 rounded-2xl"
                src={jamesImage} />
        </div>
    );
}