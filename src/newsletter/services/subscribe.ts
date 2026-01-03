import { supabase } from '../../supabase';

const CODE_ERROR= '23505'

export const saveNewsletterEmail = async (email: string) => {
    const { data, error } = await supabase.from('newsletter').insert([{ email }]);
    if(error?.code === CODE_ERROR){
        return { duplicate:true, success: true, error: { message: 'Email already subscribed.' } };
    }
    
    if (error) {
        return {
            duplicate:false, success: false,
            error: { message: error.message }
        }
    }    
    return { duplicate:false, success: true, error: null };
}
