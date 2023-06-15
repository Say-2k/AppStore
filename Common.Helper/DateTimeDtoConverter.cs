using System;
using System.Buffers;
using System.Buffers.Text;
using System.Diagnostics;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Common.Helper
{
    public class DateTimeDtoConverter : JsonConverter<DateTime>
    {
        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            throw new NotImplementedException();
            //if (Utf8Parser.TryParse(reader.ValueSpan, out DateTime value, out _, 'R'))
            //{
            //    return value;
            //}

            //throw new FormatException();
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            throw new NotImplementedException();

            //Span<byte> utf8Date = new byte[29];

            //bool result = Utf8Formatter.TryFormat(value, utf8Date, out _, new StandardFormat('R'));
            //Debug.Assert(result);

            //writer.WriteStringValue(utf8Date);
        }
    }
}
