export const EmailInput = ({inputHandler}) => {
    return (
        <div>
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                name="email-input"
                id="email"
                onChange={(e) =>
                  inputHandler((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
    )
}