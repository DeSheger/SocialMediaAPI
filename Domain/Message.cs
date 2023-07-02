namespace Domain
{
    public class Message
    {
        public Guid Id {get; set;}

        public String AuthorId {get; set;}

        public String AddresseeId {get; set;}

        public String AuthorDisplayName {get; set;}

        public String UserMessage {get; set;}

        public DateTime Date {get; set;}
    }
}