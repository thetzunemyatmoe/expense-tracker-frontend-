export async function checkTokenValid(token: string): Promise<boolean> {
  const res = await fetch(`${process.env.SPRING_BASE_URL}/api/v1/auth/validate`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      })

      if (res.ok) {
        return true
      }

      return false
}