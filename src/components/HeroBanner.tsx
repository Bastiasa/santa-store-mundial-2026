import { Button, Image, Stack, Title } from "@mantine/core";

import jamesImage from '../assets/catalog/james.jpeg';

function MoreInfoButton() {
    return (
        <Button className="mx-auto text- block!">
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
    return (
        <div className="sm:h-dvh relative p-12 w-full bg-black">

            <div className="sm:left-10 sm:translate-x-0 sm:text-6xl sm:absolute text-5xl">
                <Label1/>
            </div>

            <img
                className="sm:left-[unset] sm:right-0 sm:translate-x-0 sm:top-0 sm:mt-0 sm:h-full sm:rounded-none sm:w-auto sm:absolute w-2/3 mx-auto mt-10 rounded-2xl"
                src={jamesImage} />
        </div>
    );
}