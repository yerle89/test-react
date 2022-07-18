export interface Cat {
    fact: string
}
export interface CatsFromAPI
{
    current_page: number,
    data: Array<Cat>,
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: Array,
    next_page_url: string,
    path: number,
    per_page: number,
    prev_page_url: null,
    to: number,
    total: number
}