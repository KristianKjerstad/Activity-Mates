import { supabase } from "@/lib/supabase"

export const getUserData = async (userId: string) => {
    try {
        const {data, error} = await supabase.from("users") // get data from users table
        .select()
        .eq("id", userId)
        .single()
        if (error) {
            return {success: false, msg: error}
        }
        return {success: true, data}
    }
    catch (error) {
        console.log("got error ", error)
        return {success: false, msg: error}
    }
}