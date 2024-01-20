import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import api from '@/api'
import { ModeToggle } from '@/components/mode-toggle'
import { cn } from '@/lib/utils'

export default async function Home() {
  const matches = await api.match.list()

  return (
    <>
      <div className='flex items-center justify-end w-full h-10 mt-4 pr-4'>
        <ModeToggle />
      </div>
      <div className='m-auto w-[1200px]'>
        <h1 className='h1 text-center text-xl m-4 text-red-500'>
          Tabla de clasificaciones
        </h1>
        <Table>
          <TableCaption>
            Un listado de los resultados de los partidos
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Fecha</TableHead>
              <TableHead>Equipo 1</TableHead>
              <TableHead>Equipo 2</TableHead>
              <TableHead>Goles equipo 1</TableHead>
              <TableHead className='text-right'>Goles equipo 2</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {matches.map(({ id, date, team1, team2, goals1, goals2 }) => (
              <TableRow key={id}>
                <TableCell>{date}</TableCell>
                <TableCell>{team1}</TableCell>
                <TableCell>{team2}</TableCell>
                <TableCell
                  className={cn({
                    'font-bold text-green-500': goals1 > goals2
                  })}
                >
                  {goals1}
                </TableCell>
                <TableCell
                  className={cn('text-right', {
                    'font-bold text-green-500': goals2 > goals1
                  })}
                >
                  {goals2}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
