export default async function updateTeamMember(memberId: string, data: updateTeamMemberType){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/team/${memberId}`, {
            method: "PUT",
            body: JSON.stringify(data)
        })
        return Promise.resolve()
    }catch(err){
        console.error(err)
        return Promise.reject(err)
    }
}