import { Flex, Stack, Title, Typography } from "@mantine/core";
import { useAppContext } from "./AppContext";



const catalogImages = import.meta.glob(
  "../assets/catalog/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

console.log(catalogImages);


function TshirtPicker() {


    const { data: { shirtPicked },
        setData } = useAppContext();

    return (
        <>
            <Flex
                justify={'space-around'}
                wrap={'wrap'}
                gap={'md'}>
                {Object.values(catalogImages).map((imageSrc) => {
                    
                    function onImageClicked() {
                        setData({
                            shirtPicked:imageSrc
                        });

                        window.scrollTo({
                            top: window.document.body.offsetHeight,
                            behavior:'smooth'
                        })
                    }

                    const outline = shirtPicked === imageSrc ? 'outline-4' : 'hover:outline-4';

                    return (
                        <img
                            onClick={onImageClicked}
                            className={`lg:w-[23%] md:w-[31%] ${outline}  outline-0 outline-blue-500 transition-all rounded-2xl w-[45%] aspect-square object-cover`}
                            key={imageSrc}
                            src={imageSrc} />
                    );
                })}
            </Flex>
        </>
    )
}


export function ShirtPickerSection() {
    return (
        <Stack className="p-10">
            <Title>Compra ya tu camiseta</Title>

            <Typography>
                Elige tu camiseta haciendo clic
            </Typography>

            <TshirtPicker/>
        </Stack>
    );
}