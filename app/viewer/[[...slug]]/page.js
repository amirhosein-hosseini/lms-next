import Viewer from "@/Components/Viewer";


const ViewerPage = ({params}) => {

    return(
        <Viewer slug={params.slug} />
    )
}

export default ViewerPage;