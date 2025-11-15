import { format, isValid, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export function time(date: string): string | null {
    try {
        if (!date) return null;

        const parsedDate = parseISO(date);
        if (!isValid(parsedDate)) return null;

        return format(parsedDate, 'HH:mm', { locale: ru });
    } catch {
        return null;
    }
}
