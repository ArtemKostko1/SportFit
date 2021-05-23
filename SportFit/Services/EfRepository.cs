using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SportFit.Data.Entities;

namespace SportFit.Services
{
    public class UserRepository<T>: IEfRepository<T> where T: BaseEntity
    {
        private readonly SportFitContext _context;

        public UserRepository(SportFitContext context)
        {
            _context = context;
        }

        public IEnumerable<T> GetAll()
        {
            return _context.Set<T>().ToList();
        }

        public T GetById(Guid id)
        {
            var result = _context.Set<T>().FirstOrDefault(x => x.Id == id);

            return result ?? null;
        }

        public async Task<Guid> Add(T entity)
        {
            var result = await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
            return result.Entity.Id;
        }
    }
}