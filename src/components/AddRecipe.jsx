import NavBar from "./Nav";
import '../css/add.css'

function AddRecipe() {

    return (
        <div className="bg-sysBackgroundColor min-h-screen bg-cover recOverall">
            <NavBar />

            <div className="form-center">
                <p className="text-center mb-[2rem] font-bold text-2xl">Add Recipe</p>

                <form class="w-full grid grid-cols-2 gap-9 border border-2 px-[5rem] py-10">
                    <div class=" -mx-3 mb-6">
                        <div class="w-full px-3 mb-6 md:mb-5">
                            <label class="tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Name of recipe
                            </label>
                            <input class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div class="w-full px-3 mb-6 md:mb-5">
                            <label class="tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Time taken to prepare
                            </label>
                            <input class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div class="w-full px-3 mb-6 md:mb-0">
                            <label class="tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Category
                            </label>
                            <input class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                    </div>
                    <div class="-mx-3 mb-6">
                        <div class="w-full  px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Description
                            </label>
                            <textarea name="postContent" rows={12} cols={40} className="bg-transparent border border-2 border-gray-300 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="bg-greenPaste border border-2 border-gray-400  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Submit</button>

                    </div>
                </form>
            </div>

        </div>
    )
}
export default AddRecipe;