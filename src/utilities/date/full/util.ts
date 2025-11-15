import { format, isValid, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

interface FormatDateTimeOptions {
    days?: boolean;
    months?: boolean;
    years?: boolean;
}

export function full(date: string, options: FormatDateTimeOptions = {}): string | null {
    try {
        if (!date) return null;

        const parsedDate = parseISO(date);
        if (!isValid(parsedDate)) return null;

        const {
            days = true,
            months = true,
            years = true
        } = options;

        const formatTemplate = `${days ? 'd' : ''}${days && months ? ' ' : ''}${months ? 'MMMM' : ''}${(months && years) || (!months && years) ? ' ' : ''}${years ? 'yyyy' : ''} в HH:mm`;
        
        return format(parsedDate, formatTemplate.trim(), { locale: ru });
    } catch {
        return null;
    }
}
