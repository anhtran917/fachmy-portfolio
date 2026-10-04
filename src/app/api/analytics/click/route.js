import { NextResponse } from 'next/server';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { label, url, page } = await request.json();
    if (!label) return NextResponse.json({ error: 'label required' }, { status: 400 });
    if (!isSupabaseConfigured) {
      return NextResponse.json({ success: true, disabled: true });
    }

    await supabase.from('ad_clicks').insert([{ label, url: url || '', page: page || '' }]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
