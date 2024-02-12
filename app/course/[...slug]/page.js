import CoursePage from "@/Components/Course/CoursePage";

const Single = ({params}) => {

    return(
        <CoursePage slug={params.slug} />
    )
}

export default Single;