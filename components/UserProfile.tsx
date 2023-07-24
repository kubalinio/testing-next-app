type UserProfileProps = {
  displayName: string
  username: string
  email: string
  isEmailVerified: boolean
}

export const UserProfile = ({ displayName, username, email, isEmailVerified }: UserProfileProps) => (
  <div className="mx-auto mt-20 w-full max-w-md rounded bg-white p-6 text-lg shadow-md">
    <div className="mb-3">
      <span className="font-bold">Display Name: </span>
      {displayName.length > 30 ? displayName.slice(0, 28).concat('...') : displayName}
    </div>
    <div className="mb-3">
      <span className="font-bold">Username: </span>
      {username}
    </div>
    <div className="mb-3">
      <span className="font-bold">Email: </span>
      {email}
    </div>
    <div>
      <span className="font-bold">Verified: </span>
      {isEmailVerified ? (
        <span className="text-green-500">Email Verified</span>
      ) : (
        <span className="text-red-500">Email Not Verified</span>
      )}
    </div>
  </div>
)
