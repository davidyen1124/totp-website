import { useTotp } from '../../hooks/useTotp'

export default function LogTable() {
  const { state } = useTotp()

  return (
    <div className='overflow-auto grow'>
      <table className='w-full text-sm font-mono'>
        <thead>
          <tr className='text-left border-b border-green-400'>
            <th className='py-1 pr-2 text-green-400'>Time</th>
            <th className='pr-2 text-green-400'>Code</th>
            <th className='pr-2 text-green-400'>-1</th>
            <th className='pr-2 text-green-400'>0</th>
            <th className='text-green-400'>+1</th>
          </tr>
        </thead>
        <tbody>
          {state.log.map((entry, index) => (
            <tr key={index} className='border-b border-green-400'>
              <td className='py-1 pr-2 text-green-400'>{entry.time}</td>
              <td className='pr-2 text-green-400'>{entry.code}</td>
              {entry.results.map(({ expectedCode, result }, i) => (
                <td
                  key={i}
                  className={`pr-2 ${
                    result ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  <span className='font-mono'>{expectedCode}</span>{' '}
                  <span className={result ? 'text-green-400' : 'text-red-400'}>
                    {result ? '✓' : '✗'}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
