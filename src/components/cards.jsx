function Cards({ rec }) {
    {
        return (
            rec.map((re) => {
                return (

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow my-4">
                        <a href="#">
                            <img className="rounded-t-lg w-[100vw]" src={`https://res.cloudinary.com/hanancodes/${re.recipes_image}`} alt="" />
                        </a>
                        <div className="p-5 text-center">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{re.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{re.description}</p>
                            <hr className="h-px my-8 bg-red-200 border-2 dark:bg-gray-700 mb-4">
                            </hr>
                            <p className="text-gray-400 text-left">Time</p>
                            <p className="text-left">{re.time}</p>
                        </div>

                    </div>


                )

            })
        )

    }

}
export default Cards;