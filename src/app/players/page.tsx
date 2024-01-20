import api from '@/api'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function PlayersPage() {
  const players = api.players.list()

  return (
    <div className='m-auto max-w-md'>
      <h1 className='h1 text-center text-xl m-4 text-red-500'>
        Tabla de clasificaciones de los jugadores
      </h1>
      <Table className='border mb-8'>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead className='text-right'>Partidos</TableHead>
            <TableHead className='text-right'>Valoración</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map(({ name, score, matches }, idx) => (
            <TableRow key={idx}>
              <TableCell>{name}</TableCell>
              <TableCell className='text-right'>{matches}</TableCell>
              <TableCell className='text-right'>{score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
