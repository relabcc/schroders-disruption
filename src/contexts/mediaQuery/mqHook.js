import { useMedia } from 'react-use';

const useMq = bp => useMedia(`(min-width: ${bp})`)

export default useMq
