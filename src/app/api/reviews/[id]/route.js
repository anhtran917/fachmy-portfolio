import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose/jwt/verify';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

async function isAdmin() {
  const store = await cookies();
  const token = store.get('admin_token')?.value;
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function PATCH(request, { params }) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!isSupabaseConfigured) return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
  const { id } = await params;
  const body = await request.json();
  const { data: review, error } = await supabase.from('reviews').update(body).eq('id', id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(review);
}

export async function DELETE(_, { params }) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!isSupabaseConfigured) return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
  const { id } = await params;
  const { error } = await supabase.from('reviews').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
