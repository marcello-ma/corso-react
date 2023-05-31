import { AddIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import { Button, Table as ChakraTable, TableContainer, Thead, Tr, Th, Tbody, Td, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import Book from '../../models/bookModel';

import './Table.css'

interface Props {
    books: Book[];
    loading: boolean;
}

const Table: FC<Props> = ({ books, loading }) => {
    return (
        <>
            <div className="btn-table">
                <Button leftIcon={<AddIcon />} colorScheme="messenger">
                    New
                </Button>
            </div>
            {
                loading ? 'Loading...' : (
                    <TableContainer>
                        <ChakraTable>
                            <Thead>
                                <Tr>
                                    <Th>TITOLO</Th>
                                    <Th>AUTORE</Th>
                                    <Th>CASA EDITRICE</Th>
                                    <Th>LINGUA</Th>
                                    <Th>DISPONIBILE</Th>
                                    <Th>AZIONI</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    books && books.length > 0 ? books.map(
                                        (b, index) => <Tr key={index}>
                                            <Td>{b.title}</Td>
                                            <Td>{b.author}</Td>
                                            <Td>{b.publisher}</Td>
                                            <Td>{b.language}</Td>
                                            <Td>{b.available ? 'Yes' : 'No'}</Td>
                                            <Td className="table-actions">
                                                <IconButton
                                                    variant="outline"
                                                    colorScheme="teal"
                                                    aria-label="Detail"
                                                    icon={<ViewIcon />}
                                                    size="sm"
                                                />
                                                <IconButton
                                                    aria-label="Delete Item"
                                                    icon={<DeleteIcon />}
                                                    colorScheme="red"
                                                    size="sm"
                                                />
                                            </Td>
                                        </Tr>
                                    ) : (
                                        <Tr>
                                            <Td colSpan={6}>No Data</Td>
                                        </Tr>
                                    )
                                }
                            </Tbody>
                        </ChakraTable>
                    </TableContainer>
                )
            }
        </>
    );
}

export default Table;
