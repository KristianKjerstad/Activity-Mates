import { PropsWithChildren, createContext, useContext, useState } from "react";





export interface TUser {
    app_metadata: AppMetadata
    aud: string
    confirmed_at: string
    created_at: string
    email: string
    email_confirmed_at: string
    id: string
    identities: Identity[]
    is_anonymous: boolean
    last_sign_in_at: string
    phone: string
    role: string
    updated_at: string
    user_metadata: UserMetadata
}

export interface AppMetadata {
    provider: string
    providers: string[]
}

export interface Identity {
    created_at: string
    email: string
    id: string
    identity_data: IdentityData
    identity_id: string
    last_sign_in_at: string
    provider: string
    updated_at: string
    user_id: string
}

export interface IdentityData { }

export interface UserMetadata {
    email: string
    email_verified: boolean
    name: string
    phone_verified: boolean
    sub: string
}



// same data as found in user database table
type TUserMetadata = {
    address: string | null
    bio: string | null
    created_at: string
    id: string
    image: string | null
    name: string
    phone_number: string | null
}


type TAuthContext = {
    user: TUser | null
    userMetaData: TUserMetadata | null
    setAuth: (user: TUser | null) => void
    setUserData: (user: TUserMetadata) => void
}

export const AuthContext = createContext<TAuthContext>({
    user: null,
    userMetaData: null,
    setAuth: (user: TUser | null) => { },
    setUserData: (user: TUserMetadata) => { }
})


export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [user, setUser] = useState<TUser | null>(null)
    const [userMetaData, setUserMetaData] = useState<TUserMetadata | null>(null)

    const setAuth = (authuser: TUser | null) => {
        setUser(authuser)
    }

    const setUserData = (userData: TUserMetadata) => {
        setUserMetaData(userData)
    }

    return <AuthContext.Provider value={{
        user,
        userMetaData,
        setAuth,
        setUserData
    }
    }>
        {children}
    </AuthContext.Provider>

}
