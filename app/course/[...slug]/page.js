import SinglePage from "@/Components/Single/SinglePage";

const Single = ({params}) => {

    return(
        <SinglePage slug={params.slug} />
    )
}

export default Single;