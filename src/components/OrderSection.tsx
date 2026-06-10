import { Button, Group, Stack, Title, Typography } from "@mantine/core";
import { useAppContext } from "./AppContext";

export function OrderSection() {

    const {
        data: {
            shirtPicked
        }
    } = useAppContext();


    const whatsappMessage = `¡Hola! Me gustaría estampar este diseño:\n${shirtPicked}`


    const orderPrompt = (
        <> 
            <Stack className="w-full">

                <p>
                    Estás a un clic de completar la orden de tu diseño
                </p>

                <p className="text-2xl">
                    Esta camiseta cuesta $50.000
                </p>
                
                <a
                    
                    href={`https://wa.me/573245219027?text=${encodeURIComponent(whatsappMessage)}`}>

                    <Button className="w-full! animate-bounce">
                        Ordenar
                    </Button>
                </a>
            </Stack>

            <Stack className="sm:w-1/3 w-full">
                    <p>
                        Diseño elegido
                    </p>
                    <img
                        className="rounded-2xl aspect-square object-cover"
                        src={shirtPicked}
                        alt="" />
            </Stack>
        </>
    )

    return (
        <Stack className="px-10 pb-10">
            <Title>
                {shirtPicked ? "¡Ordénala ahora!" : "Elige tu camiseta arriba ☝️"}
            </Title>

            <Group
                justify="space-around"
                align="end"
                className="w-full">
                
                {shirtPicked ? orderPrompt : null}
            </Group>
        </Stack>
    );
}